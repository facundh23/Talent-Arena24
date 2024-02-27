import { Sequelize, DataTypes, Model } from 'sequelize';

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

  return DeviceModel;
};
