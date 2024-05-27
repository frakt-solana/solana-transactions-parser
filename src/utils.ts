export function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export async function wait(time: number) {
  return await new Promise((resolve) => setTimeout(resolve, time))
}

export async function abortOnTimeout(abortController: AbortController, timeout: number) {
  await wait(timeout * 1000)
  if (!abortController.signal.aborted) {
    abortController.abort()
  }
}
