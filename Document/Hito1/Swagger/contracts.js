/************************************************************** CLIENT */

// POST - /client/login
request: {
  payload: {
    email: String
    password: String
  }
}
response: {
  token: String
}

// POST - /client/singin
request: {
  payload: {
    email: String
    password: String
    name: String
    last_name: String
    phone: String
    address: String
    img: String
  }
}
response: {
  token: String
}

// GET - /client
request: {
  headers: {
    Authorization: String
  }
}
response: Array

// GET - /client/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: {
  id: Number
  email: String
  name: String
  last_name: String
  phone: String
  address: String
  img: String
  condition: String
  num_qualification: Number
  total_stars: Number
  created_at: String
  updated_at: String
}

// POST - /client
request: {
  headers: {
    Authorization: String
  }
  payload: {
    email: String
    name: String
    last_name: String
    phone: String
    address: String
    img: String
  }
}
response: Object

// PUT - /client/:id
request: {
  params: {
    id: Number
  }
  payload: {
    email: String
    name: String
    last_name: String
    phone: String
    address: String
    img: String
  }
  headers: {
    Authorization: String
  }
}
response: Object

// DELETE - /client/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: Object

/************************************************************** TRANSPORT */

// POST - /transport/login
request: {
  payload: {
    email: String
    password: String
  }
}
response: {
  token: String
}

// POST - /transport/singin
request: {
  payload: {
    email: String
    password: String
    name: String
    last_name: String
    phone: String
    addres: String
    img: String
  }
}
response: {
  token: String
}

// GET - /transport
request: {
  headers: {
    Authorization: String
  }
}
response: Array

// GET - /transport/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: {
  id: Number
  email: String
  name: String
  last_name: String
  phone: String
  address: String
  img: String
  condition: String
  num_qualification: Number
  total_stars: Number
  created_at: String
  updated_at: String
}

// POST - /transport
request: {
  headers: {
    Authorization: String
  }
  payload: {
    email: String
    name: String
    last_name: String
    phone: String
    address: String
    img: String
  }
}
response: Object

// PUT - /transport/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
  payload: {
    id: Number
    email: String
    name: String
    last_name: String
    phone: String
    address: String
    img: String
  }
}
response: Object

// DELETE - /transport/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: Object

//********************************************************** SHIPPING */

// GET - /shipping
request: {
  headers: {
    Authorization: String
  }
}
response: Array

// GET - /shipping/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: {
  id: Number
  trip_id: Number
  account_transport_id: Number
  account_client_id: Number
  origin_address: String
  destiny_address: String
  date_retirement: String
  time_ini_retirement: String
  time_end_retirement: String
  date_delivery: String
  time_ini_delivery: String
  time_end_delivery: String
  type_load_dshipping: String
  cubic_meters_shipping: String
  weight_shipping: String
  long_load_shipping: Number
  wide_load_shipping: Number
  high_load_shipping: Number
  status: String
  created_at: String
  updated_at: String
}

// POST - /shipping
request: {
  headers: {
    Authorization: String
  }
  payload: {
    id: Number
    trip_id: Number
    account_transport_id: Number
    account_client_id: Number
    origin_address: String
    destiny_address: String
    date_retirement: String
    time_ini_retirement: String
    time_end_retirement: String
    date_delivery: String
    time_ini_delivery: String
    time_end_delivery: String
    type_load_dshipping: String
    cubic_meters_shipping: String
    weight_shipping: String
    long_load_shipping: Number
    wide_load_shipping: Number
    high_load_shipping: Number
    status: String
  }
}
response: Object

// PUT - /shipping/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
  payload: {
    id: Number
    trip_id: Number
    account_transport_id: Number
    account_client_id: Number
    origin_address: String
    destiny_address: String
    date_retirement: String
    time_ini_retirement: String
    time_end_retirement: String
    date_delivery: String
    time_ini_delivery: String
    time_end_delivery: String
    type_load_dshipping: String
    cubic_meters_shipping: String
    weight_shipping: String
    long_load_shipping: Number
    wide_load_shipping: Number
    high_load_shipping: Number
    status: String
  }
}
response: Object

// DELETE - /shipping/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: Object

// PUT - /shipping/changeStatus/:id
request: {
  params: {
    id: Number
  }
  payload: {
    status: String
  }
  headers: {
    Authorization: String
  }
}
response: Object

//********************************************************** TRUCKS */

// GET - /trucks
request: {
  headers: {
    Authorization: String
  }
}
response: Array

// GET - /trucks/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: {
  id: Number
  account_transport_id: Number
  name: String
  country_patent: String
  patent: String
  maken: String
  model: String
  color: String
  type_load: String
  cubic_meters: Number
  max_weight: Number
  long_load: Number
  wide_load: Number
  high_load: Number
  condition: String
  created_at: String
  updated_at: String
}

// POST - /trucks
request: {
  headers: {
    Authorization: String
  }
  payload: {
    account_transport_id: Number
    name: String
    country_patent: String
    patent: String
    maken: String
    model: String
    color: String
    type_load: String
    cubic_meters: Number
    max_weight: Number
    long_load: Number
    wide_load: Number
    high_load: Number
    condition: String
  }
}
response: Object

// PUT - /trucks/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
  payload: {
    account_transport_id: Number
    name: String
    country_patent: String
    patent: String
    maken: String
    model: String
    color: String
    type_load: String
    cubic_meters: Number
    max_weight: Number
    long_load: Number
    wide_load: Number
    high_load: Number
    condition: String
  }
}
response: Object

// DELETE - /trucks/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: Object

//********************************************************** TRIPS */

// GET - /trips
request: {
  headers: {
    Authorization: String
  }
}
response: Array

// GET - /trips/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: {
  id: Number
  truck_id: Number
  account_transport_id: Number
  driver_phone: String
  origin: String
  destiny: String
  trip_date_ini: String
  time_ini: String
  time_end: String
  trip_date_end: String
  type_load_trip: String
  cubic_meters_trip: Number
  max_weight_trip: Number
  long_load_trip: Number
  wide_load_trip: Number
  high_load_trip: Number
  status: String
  created_at: String
  updated_at: String
}

// POST - /trips
request: {
  headers: {
    Authorization: String
  }
  payload: {
    truck_id: Number
    account_transport_id: Number
    driver_phone: String
    origin: String
    destiny: String
    trip_date_ini: String
    time_ini: String
    time_end: String
    trip_date_end: String
    type_load_trip: String
    cubic_meters_trip: Number
    max_weight_trip: Number
    long_load_trip: Number
    wide_load_trip: Number
    high_load_trip: Number
    status: String
  }
}
response: Object

// PUT - /trips/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
  payload: {
    id: Number
    truck_id: Number
    account_transport_id: Number
    driver_phone: String
    origin: String
    destiny: String
    trip_date_ini: String
    time_ini: String
    time_end: String
    trip_date_end: String
    type_load_trip: String
    cubic_meters_trip: Number
    max_weight_trip: Number
    long_load_trip: Number
    wide_load_trip: Number
    high_load_trip: Number
    status: String
  }
}
response: Object

// DELETE - /trips/:id
request: {
  params: {
    id: Number
  }
  headers: {
    Authorization: String
  }
}
response: Object
