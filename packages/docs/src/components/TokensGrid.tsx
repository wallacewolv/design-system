import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  enableSamplePixel?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false, enableSamplePixel = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {enableSamplePixel && <th></th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>${key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {enableSamplePixel && (
                <td className='sample-pixel-token'>
                  <div style={{ width: value }}></div>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}