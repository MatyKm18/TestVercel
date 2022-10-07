import { FC } from "react"

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[]
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: '#A2AFA2',
        borderRadius: '5px',
        padding: '10px',
    }}>
      <h3>Dark-Layout</h3>
      <div>
           { children }
      </div>

    </div>
  )
}
