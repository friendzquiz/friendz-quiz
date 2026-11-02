/**
 * Datos legales del titular de la web.
 * No se inventan: mientras falten, se muestran como [DATO PENDIENTE]
 * y `hasPendingBusinessData()` impide dar la web por lista para publicar.
 */
export const PENDING = "[DATO PENDIENTE]" as const;

export const business = {
  ownerName: PENDING,
  taxId: PENDING,
  address: PENDING,
  email: PENDING,
  registryData: PENDING,
} as const;

export function hasPendingBusinessData(): boolean {
  return Object.values(business).some((value) => value === PENDING);
}
