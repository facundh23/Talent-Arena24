import { Tracking } from '../../interfaces/tracking';

interface Props {
  trackings: Tracking[];
}

const TrackingTable = ({ trackings }: Props) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className='text-left'>Device</th>
          <th className='text-left'>Latitude</th>
          <th className='text-left'>Longitude</th>
          <th className='text-left'>Is in the area</th>
        </tr>
      </thead>
      <tbody>
        {trackings.map((tracking) => (
          <tr key={tracking.id}>
            <td>{tracking.deviceName}</td>
            <td>{tracking.endPointLatitude}</td>
            <td>{tracking.endPointLongitud}</td>
            <td>{tracking.retrievalStatus ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrackingTable;
