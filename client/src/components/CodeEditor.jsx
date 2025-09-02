export function CodEditor ({ code, language = 'html' }) {
  // Reglas de resaltado de sintaxis
  const syntaxRules = {
    html: {
      tags: /(&lt;\/?[a-zA-Z0-9\-]+(\s[a-zA-Z\-]+=".*?")*&gt;)/g,
      attributes: /([a-zA-Z\-]+)(=)/g,
      strings: /(["']).*?\1/g,
      comments: /(&lt;!--[\s\S]*?--&gt;)/g
    },
    javascript: {
      keywords:
        /\b(const|let|var|if|else|for|while|function|return|class|import|export|new|this)\b/g,
      strings: /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      comments: /(\/\*[\s\S]*?\*\/|\/\/.*)/g,
      numbers: /\b\d+(\.\d+)?\b/g
    },
    css: {
      properties: /([a-z\-]+)(:)/g,
      values: /(:\s*)([^;]+)/g,
      comments: /(\/\*[\s\S]*?\*\/)/g,
      numbers: /\b\d+(\.\d+)?(px|em|rem|%|vh|vw)?\b/g
    },
    sqlite: {}
  }

  // Resaltador de sintaxis para una sola línea
  const highlightLine = (line, language) => {
    if (!syntaxRules[language]) return line

    return line
      .replace(
        syntaxRules[language].comments,
        '<span class="comment">$1</span>'
      )
      .replace(syntaxRules[language].strings, '<span class="string">$&</span>')
      .replace(
        syntaxRules[language].tags || syntaxRules[language].keywords,
        '<span class="keyword">$&</span>'
      )
      .replace(
        syntaxRules[language].attributes,
        '<span class="attribute">$1</span>$2'
      )
  }

  // Procesar cada línea del código
  const highlightedLines = code.map((line, index) => {
    const escapedLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;') // Escapar caracteres HTML
    const highlighted = highlightLine(escapedLine, language)

    return (
      <div key={index} className='code-line'>
        <span className='line-number'>{index + 1}</span>
        <span
          className='line-content'
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
    )
  })

  return (
    <div className='code-editor'>
      <pre className='code-body'>{highlightedLines}</pre>
    </div>
  )
}