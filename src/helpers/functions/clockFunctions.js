export const formatDate = seconds => {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

export const manageReset = (
  timerRef,
  timerRunningRef,
  pausedRef,
  remainingSessionRef,
  setSessionLength,
  targetSessionLengthRef,
  remainingBreakRef,
  setBreakLength,
  targetSessionBreakRef
) => {
  //     timer object
  clearInterval(timerRef.current)
  timerRef.current = null

  //     timer state booleans
  timerRunningRef.current = false
  pausedRef.current = false

  //     state and ref of remaining time
  remainingSessionRef.current = targetSessionLengthRef.current
  setSessionLength(targetSessionLengthRef.current)

  //     breaks
  remainingBreakRef.current = targetSessionBreakRef.current
  setBreakLength(targetSessionBreakRef.current)
}
