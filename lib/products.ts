import type { PlanType } from '@/lib/plan-limits'

export interface Product {
  id: string
  plan: PlanType
  name: string
  description: string
  priceInCents: number
  billing: string
}

// Server-side source of truth — prices are never exposed to client manipulation
export const PRODUCTS: Product[] = [
  {
    id: 'lexai-pro',
    plan: 'pro',
    name: 'LexAI Pro',
    description: 'Unlimited contract analyses, unlimited AI chat, advanced risk breakdown, clause extraction, and PDF export.',
    priceInCents: 2900, // $29/month
    billing: 'per month',
  },
  {
    id: 'lexai-team',
    plan: 'team',
    name: 'LexAI Team',
    description: 'Everything in Pro plus up to 10 team members, shared contract library, team analytics, SSO & SAML, and a dedicated account manager.',
    priceInCents: 9900, // $99/month
    billing: 'per month',
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function getProductByPlan(plan: PlanType): Product | undefined {
  return PRODUCTS.find(p => p.plan === plan)
}
