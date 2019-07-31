export interface SlotInfo{
    start: string | Date
    end: string | Date
    slots: Date[] | string[]
    action: "select" | "click" | "doubleClick"
  }