class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :last_name
      t.string :clid
      t.string :email
      t.string :major
      t.string :joining_semester
      t.string :degree
      t.string :date_of_birth
      t.string :phone
      t.text :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :country
      t.string :zipcode

      t.timestamps null: false
    end
  end
end
