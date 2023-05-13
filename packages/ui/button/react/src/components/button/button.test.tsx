import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { generateButtonClassNames } from './Button'

import Button from './Button'

describe('generateButtonClassNames', () => {
  it('generates button class names', () => {
    const classnames = generateButtonClassNames('primary', 'medium', undefined)

    expect(classnames).toBe('button button__primary button__medium')
  })

  it('generates button class names with additional class names', () => {
    const classnames = generateButtonClassNames(
      'primary',
      'medium',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__primary button__medium additional-class'
    )
  })

  it('generates button class names with primary variant', () => {
    const classnames = generateButtonClassNames('primary', 'medium', undefined)

    expect(classnames).toBe('button button__primary button__medium')
  })

  it('generates button class names with secondary variant', () => {
    const classnames = generateButtonClassNames(
      'secondary',
      'medium',
      undefined
    )

    expect(classnames).toBe('button button__secondary button__medium')
  })

  it('generates button class names with small size', () => {
    const classnames = generateButtonClassNames('primary', 'small', undefined)

    expect(classnames).toBe('button button__primary button__small')
  })

  it('generates button class names with medium size', () => {
    const classnames = generateButtonClassNames('primary', 'medium', undefined)

    expect(classnames).toBe('button button__primary button__medium')
  })

  it('generates button class names with large size', () => {
    const classnames = generateButtonClassNames('primary', 'large', undefined)

    expect(classnames).toBe('button button__primary button__large')
  })

  it('generates button class names with primary variant and small size', () => {
    const classnames = generateButtonClassNames('primary', 'small', undefined)

    expect(classnames).toBe('button button__primary button__small')
  })

  it('generates button class names with primary variant and medium size', () => {
    const classnames = generateButtonClassNames('primary', 'medium', undefined)

    expect(classnames).toBe('button button__primary button__medium')
  })

  it('generates button class names with primary variant and large size', () => {
    const classnames = generateButtonClassNames('primary', 'large', undefined)

    expect(classnames).toBe('button button__primary button__large')
  })

  it('generates button class names with secondary variant and small size', () => {
    const classnames = generateButtonClassNames('secondary', 'small', undefined)

    expect(classnames).toBe('button button__secondary button__small')
  })

  it('generates button class names with secondary variant and medium size', () => {
    const classnames = generateButtonClassNames(
      'secondary',
      'medium',
      undefined
    )

    expect(classnames).toBe('button button__secondary button__medium')
  })

  it('generates button class names with secondary variant and large size', () => {
    const classnames = generateButtonClassNames('secondary', 'large', undefined)

    expect(classnames).toBe('button button__secondary button__large')
  })

  it('generates button class names with primary variant, small size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'primary',
      'small',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__primary button__small additional-class'
    )
  })

  it('generates button class names with primary variant, medium size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'primary',
      'medium',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__primary button__medium additional-class'
    )
  })

  it('generates button class names with primary variant, large size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'primary',
      'large',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__primary button__large additional-class'
    )
  })

  it('generates button class names with secondary variant, small size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'secondary',
      'small',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__secondary button__small additional-class'
    )
  })

  it('generates button class names with secondary variant, medium size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'secondary',
      'medium',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__secondary button__medium additional-class'
    )
  })

  it('generates button class names with secondary variant, large size, and additional class names', () => {
    const classnames = generateButtonClassNames(
      'secondary',
      'large',
      'additional-class'
    )

    expect(classnames).toBe(
      'button button__secondary button__large additional-class'
    )
  })
})

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>Click me</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders a button with a primary variant', () => {
    render(<Button variant="primary">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('button__primary')
  })

  it('renders a button with a secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('button__secondary')
  })

  it('renders a button with a small size', () => {
    render(<Button size="small">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('button__small')
  })

  it('renders a button with a medium size', () => {
    render(<Button size="medium">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('button__medium')
  })

  it('renders a button with a large size', () => {
    render(<Button size="large">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('button__large')
  })

  it('renders a button with a primary variant and small size', () => {
    render(
      <Button variant="primary" size="small">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__primary',
      'button__small'
    )
  })

  it('renders a button with a primary variant and medium size', () => {
    render(
      <Button variant="primary" size="medium">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__primary',
      'button__medium'
    )
  })

  it('renders a button with a primary variant and large size', () => {
    render(
      <Button variant="primary" size="large">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__primary',
      'button__large'
    )
  })

  it('renders a button with a secondary variant and small size', () => {
    render(
      <Button variant="secondary" size="small">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__secondary',
      'button__small'
    )
  })

  it('renders a button with a secondary variant and medium size', () => {
    render(
      <Button variant="secondary" size="medium">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__secondary',
      'button__medium'
    )
  })

  it('renders a button with a secondary variant and large size', () => {
    render(
      <Button variant="secondary" size="large">
        Click me
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass(
      'button__secondary',
      'button__large'
    )
  })

  it('renders a button with additional class names', () => {
    render(<Button className="additional-class">Click me</Button>)

    expect(screen.getByRole('button')).toHaveClass('additional-class')
  })
})
