class Student < ActiveRecord::Base
  validates :first_name, presence: true
  validates :major, presence: true
end


