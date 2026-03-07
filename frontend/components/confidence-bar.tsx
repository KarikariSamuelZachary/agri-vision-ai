interface ConfidenceBarProps {
  confidence: number
  label?: string
  showPercentage?: boolean
}

export function ConfidenceBar({
  confidence,
  label,
  showPercentage = true,
}: ConfidenceBarProps) {
  const percentage = Math.round(confidence * 100)
  
  let barColor = 'bg-red-500'
  if (confidence >= 0.8) {
    barColor = 'bg-green-500'
  } else if (confidence >= 0.6) {
    barColor = 'bg-yellow-500'
  } else if (confidence >= 0.4) {
    barColor = 'bg-orange-500'
  }

  return (
    <div>
      {label && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && (
            <span className="text-sm font-semibold text-foreground">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full transition-all duration-500 ease-out ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
