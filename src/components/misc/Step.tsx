interface IProps {
  number: number;
  title: string;
}

export default function Step({ number, title }: IProps) {
  return (
    <div className='flex items-center py-2 my-4 step'>
      <div className='flex items-center justify-center w-8 h-8 font-bold text-green-500 border rounded-full border-gray-light dark:border-gray-dark'>
        {number}
      </div>
      <h3 className='ml-2 tracking-tight'>{title}</h3>
    </div>
  );
}
