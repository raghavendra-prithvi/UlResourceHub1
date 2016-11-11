class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :level
      t.string :major
      t.string :joining_semester

      t.timestamps null: false
    end
  end
end
