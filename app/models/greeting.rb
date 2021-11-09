class Greeting < ApplicationRecord
  validates :message, presence: true
end
