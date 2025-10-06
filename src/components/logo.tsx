import { Truck } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* Gradient background for logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg blur-sm opacity-75"></div>
        {/* Logo icon with enhanced styling */}
        <div className="relative bg-gradient-to-br from-primary to-primary/90 p-2 rounded-lg shadow-lg">
          <Truck className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          VP Logistics
        </span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase -mt-1">
          Professional Delivery
        </span>
      </div>
    </div>
  )
}
