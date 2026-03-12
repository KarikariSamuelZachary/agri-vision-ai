'use client'

import { useState, useRef, useCallback } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { predictPlantDisease, PredictionResult } from '@/lib/api'
import { getDiseaseByName } from '@/lib/diseases'
import { DiseaseCard } from '@/components/disease-card'
import { ConfidenceBar } from '@/components/confidence-bar'
import { Upload, X, Loader2, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function DiagnosePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    setSelectedFile(file)
    setError(null)
    setResult(null)

    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }, [handleFileSelect])

  const handleAnalyze = async () => {
    if (!selectedFile) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await predictPlantDisease(selectedFile)
      setResult(result)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to analyze image'
      )
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedFile(null)
    setPreview(null)
    setResult(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const disease = result ? getDiseaseByName(result.predicted_class) : null

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-forest-green hover:text-forest-green-light transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                Diagnose Your Plant
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                Upload a clear image of the affected leaf or fruit for AI analysis
              </p>
            </div>

            {!result ? (
              <div className="space-y-8">
                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-border rounded-lg p-12 bg-card hover:border-amber transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleFileSelect(e.target.files[0])
                      }
                    }}
                    className="hidden"
                  />

                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber/20 text-amber">
                      <Upload className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {selectedFile ? 'Image Selected' : 'Drop Image Here'}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {selectedFile
                        ? `File: ${selectedFile.name}`
                        : 'Drag and drop an image or click to browse'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: PNG, JPG, WebP
                    </p>
                  </div>
                </div>

                {/* Preview */}
                {preview && (
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden border border-border bg-card h-80">
                      <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handleAnalyze}
                        disabled={isLoading}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green-light disabled:bg-muted text-cream px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          'Analyze Plant'
                        )}
                      </button>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <X className="h-5 w-5" />
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="rounded-lg bg-red-100 border border-red-300 p-4 text-red-800">
                    <p className="font-semibold">Error</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                {/* Results Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden border border-border bg-card h-96">
                      <Image
                        src={preview!}
                        alt="Analyzed"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-sm font-semibold text-muted-foreground mb-2">
                        Prediction
                      </h2>
                      <p className="text-3xl font-heading font-bold text-forest-green">
                        {result.predicted_class}
                      </p>
                    </div>

                    <div>
                      <ConfidenceBar
                        confidence={result.confidence}
                        label="Confidence"
                        showPercentage
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                        Top Predictions
                      </h3>
                      <div className="space-y-3">
                        {result.top_k_predictions.map((pred, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground">
                                {pred.predicted_class}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {(pred.confidence * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-amber transition-all duration-500"
                                style={{ width: `${pred.confidence * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="w-full inline-flex items-center justify-center gap-2 border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Diagnose Another Plant
                    </button>
                  </div>
                </div>

                {/* Disease Information */}
                {disease ? (
                  <div>
                    <DiseaseCard disease={disease} />
                  </div>
                ) : (
                  <div className="rounded-lg border border-border bg-card p-6 text-center">
                    <p className="text-muted-foreground">
                      Disease information not found for: {result.predicted_class}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
