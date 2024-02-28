import { Sequelize, DataTypes, Model } from 'sequelize';
import { DeviceModel } from './device.model';

export class TrackingModel extends Model {
  public id!: number;
  public endPointLatitude!: string;
  public endPointLongitud!: string;
  public retrievalStatus!: boolean;
  public deviceId!: string;
}

export default (sequelize: Sequelize) => {
  TrackingModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      endPointLatitude: {
        type: DataTypes.STRING,
      },
      endPointLongitud: {
        type: DataTypes.STRING,
      },
      retrievalStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deviceId: {
        type: DataTypes.STRING,
        references: {
          model: 'devices',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'tracking',
    }
  );

  return TrackingModel;
};
