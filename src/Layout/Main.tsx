import React from 'react'

export default function Main() {
  return (
     <main className="flex flex-auto bg-blue-500">
      <aside className="flex basis-48 flex-col gap-y-2 bg-green-500 p-2">
        <div className="basis-12 bg-sky-500"></div>
        <div className="basis-12 bg-sky-500"></div>
        <div className="basis-12 bg-sky-500"></div>
      </aside>
      <section
        className="flex flex-auto flex-wrap content-start items-start gap-2 bg-amber-500 p-2"
      >
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
        <div className="h-48 basis-48 bg-fuchsia-500"></div>
      </section>
      <aside className="basis-48 bg-green-500"></aside>
    </main>
  )
}
