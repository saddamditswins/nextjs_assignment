export default function MoviesLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container mx-auto flex flex-1 flex-col py-16 w-[1180px]">
      {children}
    </div>
  )
}
