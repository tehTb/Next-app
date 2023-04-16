interface characterPageType {
  params: {
    character: string
  }
}

export default function characterPage({
  params: { character },
}: characterPageType) {
  return <>{character}</>
}
