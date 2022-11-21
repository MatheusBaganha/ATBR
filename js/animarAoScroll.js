export default function animarAoScroll() {
  const observer = new IntersectionObserver(entries => {
    console.log(entries)
  })
}