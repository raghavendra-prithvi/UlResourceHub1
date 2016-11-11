class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :clid, :email, :major, :joining_semester, :degree, :date_of_birth, :phone, :address1, :address2, :city, :state, :country, :zipcode
end
