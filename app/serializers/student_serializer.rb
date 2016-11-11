class StudentSerializer<ActiveModel::Serializer 
  attributes :id, :last_name, :level,:major, :joining_semester, :url
  def url 
    student_path(object)
  end 
end