import { Sequelize, DataTypes, Model } from 'sequelize';
import { TrackingModel } from './tracking.model'; 

export class DeviceModel extends Model {
  public id!: string;
  public name!: string;
  public type!: string;
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
    },
    {
      sequelize,
      modelName: 'device',
    }
  );
  
  DeviceModel.hasMany(TrackingModel, { as: "trackings" });

  return DeviceModel;
};
