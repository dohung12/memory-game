export default function shuffleArray(array) {
  const localArr = [...array]
  for (let i = localArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[localArr[i], localArr[j]] = [localArr[j], localArr[i]]
  }
  return localArr
}
