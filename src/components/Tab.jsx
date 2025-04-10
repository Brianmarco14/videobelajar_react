const Tab = ({data, active, handle}) => {
  return (
    <div className="flex gap-10 overflow-x-auto">
        <button className={`font-dm/[140%] font-medium text-base tracking-[0.2px] capitalize cursor-pointer border-b-4 ${active === "all" ? 'border-danger-tight text-danger-tight ' : 'border-transparent text-text-secondary'} pb-3 duration-200 shrink-0`} onClick={() => handle('all')}>Semua Kelas</button>
        {
            data && data.map((item, index) => (
                <button key={index} className={`font-dm/[140%] font-medium text-base tracking-[0.2px] capitalize cursor-pointer border-b-4 ${active === item.slug ? 'border-danger-tight text-danger-tight ' : 'border-transparent text-text-secondary'} pb-3 duration-200 shrink-0`} onClick={() => handle(item.slug)}>{item.name}</button>
            ))
        }
    </div>
  )
}

export default Tab