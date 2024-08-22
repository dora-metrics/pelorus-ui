
// Get initial list of Apps that Pelorus has data for
export async function getApps() {
  const response = await fetch(`${process.env.PELORUS_API_URL}/sdp/apps?range=1w`)
  if (!response.ok) {
    throw new Error('Failed to fetch list of Apps from Pelorus')
  }
  return response.json()
}