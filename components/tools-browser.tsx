"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"
import toolCatalog from "@/data/starter-tools.json"
import { cn } from "@/lib/utils"

type Category = {
  id: string
  label: string
  description: string
}

type Tool = {
  name: string
  categoryId: string
  href: string
  use: string
  tags: string[]
}

const categories = toolCatalog.categories as Category[]
const tools = toolCatalog.tools as Tool[]

const categoryLabels = new Map(categories.map((category) => [category.id, category.label]))

export function ToolsBrowser() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [query, setQuery] = useState("")

  const activeDescription =
    activeCategory === "all"
      ? "Browse by category, or search for a familiar name or personal use case."
      : categories.find((category) => category.id === activeCategory)?.description

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return tools.filter((tool) => {
      const inCategory = activeCategory === "all" || tool.categoryId === activeCategory

      if (!normalizedQuery) {
        return inCategory
      }

      const searchable = [tool.name, tool.use, categoryLabels.get(tool.categoryId), ...tool.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return inCategory && searchable.includes(normalizedQuery)
    })
  }, [activeCategory, query])

  return (
    <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-[0_20px_60px_-45px_rgba(63,38,36,0.42)] sm:p-6">
      <div className="flex flex-col gap-4 border-b border-border/70 pb-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground">Browse the starter list</h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{activeDescription}</p>
          </div>
          <p aria-live="polite" className="shrink-0 text-sm text-muted-foreground">
            {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
          </p>
        </div>

        <label className="flex h-11 items-center gap-3 rounded-2xl border border-border/70 bg-background px-4 text-sm transition focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/30">
          <Search className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
          <span className="sr-only">Search starter tools</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search names, use cases, or tags"
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
          />
        </label>

        <div
          role="group"
          aria-label="Filter tools by category"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "h-10 shrink-0 rounded-full border px-4 text-sm transition-colors",
              activeCategory === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/70 bg-background text-muted-foreground hover:text-foreground",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={cn(
                "h-10 shrink-0 rounded-full border px-4 text-sm transition-colors",
                activeCategory === category.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/70 bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[27rem] overflow-y-auto pr-1">
        {filteredTools.length > 0 ? (
          <div className="divide-y divide-border/70">
            {filteredTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 py-5 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-start"
              >
                <span>
                  <span className="flex items-center gap-2 font-medium text-foreground">
                    {tool.name}
                    <ArrowUpRight
                      className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="mt-1 inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    {categoryLabels.get(tool.categoryId)}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{tool.use}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="font-serif text-xl text-foreground">No tools match that search.</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Try a broader term. Employees can also suggest tools for the next review.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
