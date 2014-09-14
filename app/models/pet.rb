class Pet
  include Mongoid::Document

  field :name, type: String
  field :gender, type: Symbol, default: :male
  field :breed, type: String
  field :description, type: String
  field :images, type: Array

  field :email, type: String
  field :phone, type: String

  field :area_code, type: String
  field :city, type: String
  field :state, type: String

  field :active, type: Boolean, default: true
  field :status, type: Symbol, default: :lost

  validates_presence_of :name
end