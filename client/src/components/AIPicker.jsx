import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({prompt, setPrompt, generatingImage, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Ask GPT'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-3'>
        {generatingImage ? (
          <CustomButton
            type='outline'
            title='Asking GPT'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI Logo'
              handleClick={() => handleSubmit('logo')}
            />
            <CustomButton
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit('full')}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker;