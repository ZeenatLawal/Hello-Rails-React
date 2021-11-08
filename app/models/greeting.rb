class Greeting < ApplicationRecord
  validates :message, presence: true, length: { in: 6..25 }
end
