import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "tinker-button group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none focus-visible:border-[var(--focus-ring)] active:not-aria-[haspopup]:translate-y-[var(--press-offset)] disabled:pointer-events-none disabled:opacity-[var(--state-disabled-opacity)] aria-invalid:border-destructive aria-invalid:ring-destructive data-[status=success]:border-success data-[status=success]:bg-success-surface data-[status=success]:text-success-foreground data-[status=success]:hover:bg-success-surface [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground [a]:hover:bg-[color-mix(in_oklab,var(--primary)_84%,transparent)]',
        ink:
          'bg-foreground text-background [a]:hover:bg-[color-mix(in_oklab,var(--foreground)_86%,transparent)]',
        outline:
          'border-input bg-background hover:bg-[var(--state-hover)] hover:text-foreground active:bg-[var(--state-press)] aria-expanded:bg-[var(--state-selected)] aria-expanded:text-foreground',
        paper:
          'tinker-button--paper border-[var(--palette-night-paper)] bg-[var(--palette-night-paper)] text-[var(--palette-night-water)] focus-visible:border-transparent focus-visible:ring-[var(--palette-night-paper)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-[var(--palette-night-water)]',
        darkOutline:
          'border-[var(--palette-night-quiet)] bg-transparent text-[var(--palette-night-paper)] hover:border-[var(--palette-night-paper)] hover:bg-[var(--state-hover)] hover:text-[var(--palette-night-paper)] active:bg-[var(--state-press)] focus-visible:border-[var(--palette-night-paper)]',
        sun:
          'sun-fill-button focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-[var(--state-hover)] hover:text-foreground active:bg-[var(--state-press)] aria-expanded:bg-[var(--state-selected)] aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-[var(--control-h-md)] gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-[var(--control-h-xs)] gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-[var(--control-h-sm)] gap-1 px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-[var(--control-h-lg)] gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-[var(--control-h-md)]',
        'icon-xs': "size-[var(--control-h-xs)] [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-[var(--control-h-sm)]',
        'icon-lg': 'size-[var(--control-h-lg)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
