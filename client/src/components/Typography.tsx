
export const Text = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="font-barlow-condensed text-base">{children}</div>
  )
}

export const Title = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="font-pirata text-2xl">{children}</div>
  )
}