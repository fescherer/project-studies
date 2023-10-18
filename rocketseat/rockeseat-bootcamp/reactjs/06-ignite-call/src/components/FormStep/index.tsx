import clsx from 'clsx'

type FormStepProps = {
  step: number
  currentStep: number
}

export function FormStep({ step, currentStep }: FormStepProps) {
  const items = Array.from(Array(step).keys())

  return (
    <div className="flex w-full flex-col gap-2">
      <span>
        Passo {currentStep + 1} de {step}
      </span>
      <div className="flex gap-2">
        {items.map((item) => (
          <div
            key={item}
            className={clsx('flex h-1 w-full rounded', {
              'bg-gray-200': item <= currentStep,
              'bg-gray-600': item > currentStep,
            })}
          ></div>
        ))}
      </div>
    </div>
    // <div className="flex w-full items-center justify-center">
    //   {items.map((item, index) => (
    //     <li
    //       key={index}
    //       className={clsx('flex items-center', {
    //         "after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[''] w-full":
    //           index !== items.length - 1,
    //         'w-40': index === items.length - 1,
    //         'after:border-gray-100': item,
    //         'after:border-gray-400': !item,
    //       })}
    //     >
    //       <span
    //         className={clsx(
    //           'flex h-10 w-10 shrink-0 items-center justify-center rounded-full  lg:h-12 lg:w-12',
    //           {
    //             'bg-gray-100': item,
    //             'bg-gray-400': !item,
    //           },
    //         )}
    //       ></span>
    //     </li>
    //   ))}
    // </div>
  )
}
