
export const Text = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="font-barlow-condensed text-lg">{children}</div>
  )
}

export const Title = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="font-pirata text-xl">{children}</div>
  )
}