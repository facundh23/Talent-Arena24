import { Sequelize, DataTypes, Model } from 'sequelize';
import { DeviceStatus } from '../enums/device-status';
import { TrackingModel } from './tracking.model';

export class DeviceModel extends Model {
  public id!: string;
  public name!: string;
  public type!: string;
  public latitude!: string;
  public longitude!: string;
  public status!: string;
}

export default (sequelize: Sequelize) => {
  DeviceModel.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.STRING,
      },
      longitude: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM({
          values: Object.values(DeviceStatus),
        }),
        defaultValue: DeviceStatus.UNREACHABLE,
      },
    },
    {
      sequelize,
      modelName: 'device',
    }
  );

  return DeviceModel;
};
