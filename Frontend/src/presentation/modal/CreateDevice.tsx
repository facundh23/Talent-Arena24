import { FormEvent, useState } from 'react';
import { Device } from '../../interfaces/device';

interface Props {
  closeModal: () => void;
  options: { id: string; name: string }[];
  handleCreateDevice: (data: Partial<Device>) => Promise<void>;
}

export const CreateDevice = ({
  options,
  closeModal,
  handleCreateDevice,
}: Props) => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [type, setType] = useState<string>('');

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    await handleCreateDevice({
      id,
      name,
      type,
    });
    closeModal();
  };

  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex  justify-center items-start md:h-[100%]  lg:w-[100%] lg:mx-auto lg:h-[100%] z-[9999]">
      <form
        onSubmit={onSubmitForm}
        className="w-[100%] h-[50%]  border-x-indigo-500 border-y-black border-4 flex flex-col md:w-[90%] md:h-[20%] md:flex-col p-6 mt-[10%] gap-2  md:mx-auto transition-all duration-500"
      >
        <div className="flex flex-col items-center gap-2 md:flex-row md:w-100%">
          <input
            type="text"
            autoFocus
            name="name"
            className={
              type === ''
                ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900'
                : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'
            }
            placeholder="Create Your Device"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            autoFocus
            name="id"
            className={
              type === ''
                ? 'w-full rounded-xl focus:outline-none focus:border-indigo-600 pl-4 h-10 border-red-400 border-4 text-red-900'
                : 'w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'
            }
            placeholder="Post your Id Device"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <select
            name="type"
            onChange={(e) => setType(e.target.value)}
            className="w-full md:w-2/5 md:ml-5  border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-600 pl-4 h-10"
          >
            <option className='h-10' value="">Options</option>
            {options.map((device) => (
              <option key={device.id} value={device.id}>
                {device.name}
              </option>
            ))}
          </select>
        </div>

        <div className="ml-4 flex flex-col gap-2 items-center justify-around md:flex-row md:justify-center md:items-center mt-5">
          <button className="btn-primary w-full flex  items-center justify-center">
            <span className="mr-2">Create Device</span>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
          <button
            onClick={closeModal}
            className="btn-primary w-full xs:mt-2 flex items-center justify-center"
          >
            <span className="mr-2">Close Modal</span>
            <i className="fa-regular fa-rectangle-xmark"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
