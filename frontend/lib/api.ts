export interface PredictionResponse {
  predicted_class: string
  confidence: number
  top_k_predictions: Array<{
    predicted_class: string
    confidence: number
  }>
}

export interface PredictionResult extends PredictionResponse {
  timestamp: number
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function predictPlantDisease(
  imageFile: File
): Promise<PredictionResult> {
  const formData = new FormData()
  formData.append('file', imageFile)

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.detail || `API Error: ${response.statusText}`
      )
    }

    const data: PredictionResponse = await response.json()

    return {
      ...data,
      timestamp: Date.now(),
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to predict disease: ${error.message}`)
    }
    throw new Error('Failed to predict disease')
  }
}

export function formatConfidence(confidence: number): string {
  return `${(confidence * 100).toFixed(1)}%`
}

export function getConfidenceColor(
  confidence: number
): 'text-red-600' | 'text-yellow-600' | 'text-green-600' {
  if (confidence < 0.5) return 'text-red-600'
  if (confidence < 0.8) return 'text-yellow-600'
  return 'text-green-600'
}
