'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function DeploymentFrequencyRating(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-full">Needs improvement</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold leading-none">Rating scale</h4>
            <p className="text-sm text-muted-foreground">How well you are performing at this metric</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 items-center gap-4">
              <span>Elite</span>
              <span>2 or more per day</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span>High</span>
              <span>1 per day - 1 per week</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span>Medium</span>
              <span>1 per week - 1 per month</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4 font-semibold">
              <span>Low</span>
              <span>1 per month - 1 per 6 months</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}