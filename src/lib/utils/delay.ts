/**
 * Simula latencia de red para demostrar características de renderizado
 * @param ms - Milisegundos de delay
 * @returns Promise que se resuelve después del delay
 */
export async function simulateLatency(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
