import Clipboard from '../../assets/clipboard.svg'

export const EmptyTasks = function () {
  return (
    <div className="flex flex-col items-center gap-4 py-16 px-6 rounded-lg border-t-[1px] border-solid border-gray-400">
      <img src={Clipboard} alt="" className="h-[56px]" />
      <p className="flex flex-col items-center text-gray-300 text-lg font-bold">
        Você ainda não tem tarefas cadastradas
        <span className="font-normal">
          Crie tarefas e organize seus itens a fazer
        </span>
      </p>
    </div>
  )
}
