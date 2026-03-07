import { Disease } from '@/lib/diseases'
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react'

interface DiseaseCardProps {
  disease: Disease
}

export function DiseaseCard({ disease }: DiseaseCardProps) {
  const severityConfig = {
    low: {
      color: 'bg-green-100 text-green-800',
      icon: CheckCircle2,
      label: 'Low',
    },
    medium: {
      color: 'bg-yellow-100 text-yellow-800',
      icon: AlertTriangle,
      label: 'Medium',
    },
    high: {
      color: 'bg-orange-100 text-orange-800',
      icon: AlertCircle,
      label: 'High',
    },
    critical: {
      color: 'bg-red-100 text-red-800',
      icon: AlertCircle,
      label: 'Critical',
    },
  }

  const config = severityConfig[disease.severity]
  const IconComponent = config.icon

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            {disease.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {disease.crops.join(', ')}
          </p>
        </div>
        <div className={`rounded-full ${config.color} p-2`}>
          <IconComponent className="h-5 w-5" />
        </div>
      </div>

      <div className={`mb-4 inline-block rounded-full ${config.color} px-3 py-1 text-xs font-semibold`}>
        Severity: {config.label}
      </div>

      <p className="mb-6 text-foreground">{disease.description}</p>

      <div className="mb-6 space-y-4">
        <div>
          <h3 className="mb-2 font-heading font-semibold text-foreground">
            Symptoms
          </h3>
          <ul className="space-y-1">
            {disease.symptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-heading font-semibold text-foreground">
            Organic Treatment
          </h3>
          <p className="text-sm text-foreground">
            {disease.organicTreatment}
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-heading font-semibold text-foreground">
            Chemical Treatment
          </h3>
          <p className="text-sm text-foreground">
            {disease.chemicalTreatment}
          </p>
        </div>
      </div>
    </div>
  )
}
