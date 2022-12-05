import { useState } from 'react'


function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null)

  const copy = async blob => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
          }
      
          // Try to save to clipboard then save it in the state if worked
          try {
            const data = [new ClipboardItem({ [blob.type]: blob })]
             navigator.clipboard.write(data)
            setCopiedText(data)
            return true
          } catch (error) {
            console.warn('Copy failed', error)
            setCopiedText(null)
            return false
          }

    

  }

  return [copiedText, copy]
}

export default useCopyToClipboard


