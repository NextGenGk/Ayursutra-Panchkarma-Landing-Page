"use client"

import React from 'react'

interface ChartData {
  name: string
  value: number
  color?: string
}

// Simple CSS-based Bar Chart
export function SimpleBarChart({ data, title }: { data: ChartData[], title: string }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full p-4 bg-card rounded-lg border">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="flex items-center justify-center h-32 text-muted-foreground">
          No data available
        </div>
      </div>
    )
  }
  
  const maxValue = Math.max(...data.map(d => d.value))
  const colors = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', '#06b6d4']

  return (
    <div className="w-full p-4 bg-card rounded-lg border">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-16 text-xs text-muted-foreground truncate">{item.name}</div>
            <div className="flex-1 bg-muted rounded-full h-4 relative">
              <div
                className="h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color || colors[index % colors.length]
                }}
              />
            </div>
            <div className="w-8 text-xs text-muted-foreground text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simple CSS-based Line Chart
export function SimpleLineChart({ data, title }: { data: ChartData[], title: string }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full p-4 bg-card rounded-lg border">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="flex items-center justify-center h-48 text-muted-foreground">
          No data available
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-4 bg-card rounded-lg border">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="h-48 flex items-end justify-between gap-2 border-b border-l border-border p-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="text-xs text-muted-foreground mb-1">{item.value}</div>
            <div
              className="w-full rounded-t transition-all duration-500 hover:opacity-80"
              style={{
                height: `${(item.value / Math.max(...data.map(d => d.value))) * 160}px`,
                minHeight: '4px',
                backgroundColor: 'hsl(var(--primary))'
              }}
            />
            <div className="text-xs text-muted-foreground mt-2">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simple Progress Ring
export function SimpleProgressRing({ value, label, color = 'hsl(var(--primary))' }: { value: number, label: string, color?: string }) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 rounded-full border-8 border-muted"></div>
        <div 
          className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-transparent transition-all duration-500"
          style={{
            borderTopColor: color,
            transform: `rotate(${(value / 100) * 360}deg)`
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{value}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-2 text-center">{label}</span>
    </div>
  )
}

// Simple Pie Chart using CSS
export function SimplePieChart({ data, title }: { data: ChartData[], title: string }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full p-4 bg-card rounded-lg border">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="flex items-center justify-center h-32 text-muted-foreground">
          No data available
        </div>
      </div>
    )
  }
  
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const colors = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', '#06b6d4']

  return (
    <div className="w-full p-4 bg-card rounded-lg border">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="flex items-center justify-center gap-6">
        <div className="w-32 h-32 rounded-full relative overflow-hidden">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            return (
              <div
                key={index}
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(${item.color || colors[index % colors.length]} 0% ${percentage}%, transparent ${percentage}% 100%)`,
                  transform: `rotate(${data.slice(0, index).reduce((sum, d) => sum + (d.value / total) * 360, 0)}deg)`
                }}
              />
            )
          })}
          <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{total}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color || colors[index % colors.length] }}
              />
              <span className="text-xs text-muted-foreground">
                {item.name}: {item.value} ({Math.round((item.value / total) * 100)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}