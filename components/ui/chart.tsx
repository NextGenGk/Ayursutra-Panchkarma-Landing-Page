"use client"

import React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

interface ChartData {
  name: string
  value: number
  color?: string
  [key: string]: string | number | undefined
}

interface LineChartProps {
  data: ChartData[]
  title: string
  height?: number
}

interface BarChartProps {
  data: ChartData[]
  title: string
  height?: number
}

interface PieChartProps {
  data: ChartData[]
  title: string
  size?: number
}

// Line Chart Component using Recharts
export function LineChart({ data, title, height = 200 }: LineChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="bg-card rounded-lg p-4 border" style={{ height: height + 40 }}>
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No data available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="bg-card rounded-lg p-4 border" style={{ height: height + 40 }}>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                fontSize: '12px',
                color: 'hsl(var(--foreground))',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Bar Chart Component using Recharts
export function BarChart({ data, title, height = 200 }: BarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="bg-card rounded-lg p-4 border" style={{ height: height + 40 }}>
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No data available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="bg-card rounded-lg p-4 border" style={{ height: height + 40 }}>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                fontSize: '12px',
                color: 'hsl(var(--foreground))',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Pie Chart Component using Recharts
export function PieChart({ data, title, size = 140 }: PieChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full">
        <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
        <div className="bg-card rounded-lg p-4 border" style={{ height: size + 80 }}>
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No data available
          </div>
        </div>
      </div>
    )
  }

  const colors = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))', 
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
    '#06b6d4',
    '#f97316',
    '#84cc16'
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-4 text-foreground">{title}</h3>
      <div className="bg-card rounded-lg p-4 border">
        <div className="flex items-center justify-center gap-6">
          <ResponsiveContainer width={size} height={size}>
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={size * 0.15}
                outerRadius={size * 0.35}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color || colors[index % colors.length]} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: 'hsl(var(--foreground))',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="flex flex-col gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full shadow-sm"
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
    </div>
  )
}

// Progress Ring Component
export function ProgressRing({ 
  value, 
  max = 100, 
  size = 80, 
  strokeWidth = 8,
  color = 'hsl(var(--primary))',
  label 
}: {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: string
  label?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const percentage = (value / max) * 100
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center p-2">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90 drop-shadow-sm">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity="0.3"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-sm font-bold text-foreground">{Math.round(percentage)}%</span>
          </div>
        </div>
      </div>
      {label && <span className="text-xs text-muted-foreground mt-2 text-center max-w-20 truncate">{label}</span>}
    </div>
  )
}