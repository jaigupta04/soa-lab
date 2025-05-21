from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Train model
clf = RandomForestClassifier()
clf.fit(X, y)

# Save model
joblib.dump(clf, "iris_model.pkl")
