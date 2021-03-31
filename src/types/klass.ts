type Klass = {
  id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  module: KlassModules;
  type: KlassType;
};

export enum KlassType {
  integral = 'integral',
  noturna = 'noturna',
}

export enum KlassModules {
  undefined,
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
}

export default Klass;
