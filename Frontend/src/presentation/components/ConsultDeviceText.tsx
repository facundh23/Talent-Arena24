import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
    placeholder: string;
    options: Options[]
}

interface Options {
    id: string;
    name: string;
    type:string
}




const ConsultDeviceText = ({  placeholder, options, onSendQuery }: Props) => {
    const [query, setQuery] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('')

    let {name, type} = useParams();

  
   
    const getDeviceTest = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/device?name=${name}&type=${type}`);
        const data = await response.json();
        console.log(data)
        return data;
      };
    return (
        <form
            onSubmit={getDeviceTest}
            className='flex flex-col w-full md:flex-row items-center justify-center h-52 md:h-32 p-2 rounded-xl bg-indigo-600  px-4 w-100%'
        >
            <div className='flex-grow w-full items-center justify-center md:gap-2'>
                <div className='flex flex-col items-center gap-2 md:flex-row md:w-100%'>
                    <input
                        type="text"
                        autoFocus
                        name='name'
                        className={selectedOption === '' ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900' : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'}
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <select name='type' onChange={(e) => setSelectedOption(e.target.value)}
                        className='w-full md:w-2/5 md:ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-600 pl-4 h-10'>
                        <option value="">Options</option>
                        {
                            options.map(device => (

                                <option key={device.id} value={device.id}>{device.name}</option>
                            ))
                        }
                    </select>

                    <button type='submit' className='btn-primary w-full md:w-32 flex items-center justify-center'>
                        <span className='mr-2'>Results</span>
                        <i className='fa-regular fa-paper-plane'></i>
                    </button>
                </div>
            </div>





        </form>
    )
}

export default ConsultDeviceText
