export function hexStringToUint8Array(hex: string): Uint8Array {
	const match = new RegExp(`^(?:0x)?([a-fA-F0-9]*)$`).exec(hex)
	if (match === null) throw new Error(`Expected a hex string encoded byte array with an optional '0x' prefix but received ${hex}`)
	const maybeLeadingZero = (match[1].length % 2) ? '0' : ''
	const normalized = `${maybeLeadingZero}${match[1]}`
	const byteLength = normalized.length / 2
	const bytes = new Uint8Array(byteLength)
	for (let i = 0; i < byteLength; ++i) {
		bytes[i] = (Number.parseInt(`${normalized[i*2]}${normalized[i*2+1]}`, 16))
	}
	return bytes
}
