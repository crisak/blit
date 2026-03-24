import { create } from 'zustand'

interface FilterState {
  category: string | undefined
  technique: string | undefined
  city: string | undefined
  orientation: string | undefined
  featured: boolean | undefined
  year: number | undefined
  search: string | undefined
}

interface UIState {
  filters: FilterState
  isFilterModalOpen: boolean
  isImageViewerOpen: boolean
  currentImageIndex: number
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void
  clearFilters: () => void
  setFilters: (filters: Partial<FilterState>) => void
  openFilterModal: () => void
  closeFilterModal: () => void
  openImageViewer: (index: number) => void
  closeImageViewer: () => void
}

const initialFilters: FilterState = {
  category: undefined,
  technique: undefined,
  city: undefined,
  orientation: undefined,
  featured: undefined,
  year: undefined,
  search: undefined,
}

export const useUIStore = create<UIState>((set) => ({
  filters: initialFilters,
  isFilterModalOpen: false,
  isImageViewerOpen: false,
  currentImageIndex: 0,

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  clearFilters: () =>
    set(() => ({
      filters: initialFilters,
    })),

  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),

  openFilterModal: () => set(() => ({ isFilterModalOpen: true })),
  closeFilterModal: () => set(() => ({ isFilterModalOpen: false })),

  openImageViewer: (index) =>
    set(() => ({
      isImageViewerOpen: true,
      currentImageIndex: index,
    })),

  closeImageViewer: () =>
    set(() => ({
      isImageViewerOpen: false,
      currentImageIndex: 0,
    })),
}))
