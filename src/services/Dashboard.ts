export function dashboardURL(): string {
  const dashboardEnvVar = process.env.GATSBY_BEARER_DASHBOARD_SETUP_URL || ''
  return `${dashboardEnvVar.split('.bearer.sh')[0]}.bearer.sh`
}
